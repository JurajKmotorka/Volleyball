import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRef } from "react";
import { useState } from "react";
import { trpc } from "(/)/utils/trpc";
import { CONTACT_MAIL } from "(/)/utils/index";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  note: string;
};

const schema = z.object({
  firstName: z.string().min(1, "Povinné pole"),
  lastName: z.string().min(1, "Povinné pole"),
  email: z.string().min(1, "Povinné pole").email("Nevalidný email"),
  note: z.string().min(1, "Povinné pole").max(2000, "Max 2000 znakov"),
});

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: { email: "", firstName: "", lastName: "", note: "" },
  });

  const toggleModalBtn = useRef<HTMLLabelElement>(null);
  const [state, setState] = useState<"loading" | "success" | "error">();
  const { mutateAsync } = trpc.contact.contactMe.useMutation();

  const toggleModal = () => {
    toggleModalBtn.current?.click();
  };

  const submit = async () => {
    setState("loading");
    const { errors: mutationErrors } = await mutateAsync({
      buyer: getValues(),
    });

    toggleModal();

    if (mutationErrors) {
      //todo log to sentry or somwhere
      console.log("EMAIL ERROR:", mutationErrors);
      setState("error");
      return;
    }
    setState("success");
  };

  return (
    <>
      <h2
        id="contact"
        className=" -mb-2 px-2 text-center text-3xl font-semibold sm:mb-0 md:pb-4 lg:text-4xl xl:text-5xl"
      >
        {"We'd love to hear from you !"}
      </h2>
      <form className="mt-10" onSubmit={handleSubmit(submit)}>
        <div className="mx-auto w-full max-w-sm p-2">
          <div className="form-control mx-auto w-full max-w-sm">
            <label className="label">
              <span className="label-text">Meno *</span>
            </label>
            <input
              {...register("firstName")}
              type="text"
              placeholder="napr. Jozef"
              className={`input-bordered input w-full max-w-sm ${
                errors.firstName ? "input-warning" : ""
              }`}
            />
            {errors.firstName && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.firstName.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control mx-auto w-full max-w-sm">
            <label className="label">
              <span className="label-text">Priezvisko *</span>
            </label>
            <input
              {...register("lastName")}
              type="text"
              placeholder="napr. Slovák"
              className={`input-bordered input w-full max-w-sm ${
                errors.lastName ? "input-warning" : ""
              }`}
            />
            {errors.lastName && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.lastName.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control mx-auto w-full max-w-sm">
            <label className="label">
              <span className="label-text">Email *</span>
            </label>
            <input
              {...register("email")}
              type="text"
              placeholder="napr. jozef.slovak@gmail.com"
              className={`input-bordered input w-full max-w-sm ${
                errors.email ? "input-warning" : ""
              }`}
            />
            {errors.email && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control mx-auto w-full max-w-sm">
            <label className="label">
              <span className="label-text">Vaša správa *</span>
            </label>
            <textarea
              {...register("note")}
              placeholder="..."
              className={`input-bordered textarea w-full max-w-sm ${
                errors.note ? "input-warning" : ""
              }`}
            />
            {errors.note && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.note.message}
                </span>
              </label>
            )}
          </div>
          <button
            type="submit"
            aria-label="odoslať"
            className={`btn ${
              state === "loading" ? "loading" : ""
            } mx-auto mt-5 w-full max-w-sm rounded-sm bg-maingrad p-2 text-center text-zinc-100`}
          >
            Odoslať správu
          </button>
        </div>

        <label
          ref={toggleModalBtn}
          htmlFor="confirm-modal"
          className="hidden"
        />

        <input
          type="checkbox"
          aria-label="potvrdenie odoslania"
          id="confirm-modal"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box">
            {state === "success" && (
              <>
                <h3 className="text-lg font-bold">Ďakujeme za správu</h3>
                <p className="py-4">Ozveme sa vám hneď ako to bude možné</p>
                <div className="modal-action">
                  <button
                    className="btn"
                    aria-label="zavrieť"
                    onClick={() => {
                      toggleModal();
                      setState(undefined);
                      reset();
                    }}
                  >
                    Zavrieť
                  </button>
                </div>
              </>
            )}

            {state === "error" && (
              <>
                <h3 className="text-lg font-bold">Nastala chyba</h3>
                <p className="py-4">
                  Ospravedlnujeme sa ale nastala neočakávaná chyba. Skúste
                  prosím neskôr alebo nás kontaktujte na {CONTACT_MAIL}
                </p>
                <div className="modal-action">
                  <label
                    className="btn"
                    onClick={() => {
                      toggleModal();
                      setState(undefined);
                    }}
                  >
                    Zavrieť
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
      </form>
    </>
  );
};
