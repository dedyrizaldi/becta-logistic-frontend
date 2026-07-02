"use client";

import { useCallback, useState } from "react";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("contact-page");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log(form);

      // TODO:
      // POST ke Laravel
    },
    [form],
  );

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">
      <h2 className="text-3xl font-bold text-[#071C3A]">{t("formTitle")}</h2>

      <p className="mt-2 text-slate-600">{t("formDescription")}</p>

      <form noValidate onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label={t("name")}
            placeholder={t("name")}
            name="name"
            value={form.name}
            autoComplete="name"
            onChange={handleChange}
          />

          <Input
            label={t("email")}
            placeholder={t("email")}
            name="email"
            type="email"
            value={form.email}
            autoComplete="email"
            onChange={handleChange}
          />

          <Input
            label={t("phone")}
            placeholder={t("phone")}
            name="phone"
            value={form.phone}
            autoComplete="tel"
            onChange={handleChange}
          />

          <Input
            label={t("subject")}
            placeholder={t("subject")}
            name="subject"
            value={form.subject}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-[#071C3A]"
          >
            {t("message")}
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            autoComplete="off"
            placeholder={t("message")}
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-slate-200
              px-4
              py-3
              outline-none
              transition-all
              focus:border-[#D8A41D]
              focus:ring-4
              focus:ring-[#D8A41D]/20
            "
          />
        </div>

        <button
          type="submit"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-[#D8A41D]
            px-6
            py-3
            font-semibold
            text-white
            transition-all
            hover:bg-[#c99310]
          "
        >
          {t("send")}

          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

interface InputProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  autoComplete?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  name,
  value,
  placeholder,
  type = "text",
  autoComplete = "off",
  onChange,
}: InputProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-[#071C3A]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        required
        aria-label={label}
        className="
          h-12
          w-full
          rounded-xl
          border
          border-slate-200
          px-4
          outline-none
          transition-all
          focus:border-[#D8A41D]
          focus:ring-4
          focus:ring-[#D8A41D]/20
        "
      />
    </div>
  );
};

export default ContactForm;
