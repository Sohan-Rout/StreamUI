"use client";
import React, { useState } from "react";
import { IoMdCloseCircle } from "streamui-deps";

export default function AuthForm({
  mode: initialMode = "login",
  onSubmit,
  title,
  description,
  submitText,
  extraFields,
}) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const defaultSignupFields = [{ name: "username", label: "Username", type: "text", required: true }];
  const signupFields = mode === "signup"
    ? [...defaultSignupFields, ...(extraFields || [])]
    : [];
  const [extras, setExtras] = useState(
    signupFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) return alert("Please agree to the Terms and Conditions.");
    setIsLoading(true);

    try {
      const payload =
        mode === "signup"
          ? { email, password, ...extras }
          : { email, password };

      console.log(mode === "signup" ? "Signing up user:" : "Logging in user:", payload);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      onSubmit(payload);
    } catch (error) {
      console.error("Error in auth:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExtraChange = (e) => {
    setExtras({ ...extras, [e.target.name]: e.target.value });
  };

  const toggleMode = () => {
    const newMode = mode === "login" ? "signup" : "login";
    setMode(newMode);
    setExtras(
      newMode === "signup"
        ? [...defaultSignupFields, ...(extraFields || [])].reduce(
            (acc, field) => ({ ...acc, [field.name]: "" }),
            {}
          )
        : {}
    );
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-xl p-6 bg-white dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/20 shadow-lg">
      <div className="flex justify-between pb-2">
        <IoMdCloseCircle className="text-neutral-400"/>
        <IoMdCloseCircle className="text-neutral-400"/>
      </div>
      <div className="px-2">
      <div className="flex justify-center mb-2">
        <h2 className="text-lg rounded-full px-4 py-1 tracking-wide font-medium text-black bg-green-500 text-center">
          {title || (mode === "login" ? "Welcome Back" : "Create Account")}
        </h2>
      </div>
        <p className="text-md text-neutral-600 dark:text-neutral-400 text-center mt-1">
          {description ? description : "Continue to your dashboard."}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <input
            className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md bg-transparent text-black dark:text-white placeholder-neutral-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md bg-transparent text-black dark:text-white placeholder-neutral-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {mode === "signup" &&
            signupFields.map(({ name, label, type = "text", required = false }) => (
              <input
                key={name}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md bg-transparent text-black dark:text-white placeholder-neutral-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
                type={type}
                name={name}
                required={required}
                value={extras[name] || ""}
                onChange={handleExtraChange}
                placeholder={label || name.charAt(0).toUpperCase() + name.slice(1)}
              />
            ))}
          <label className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="border border-neutral-300 dark:border-neutral-700 rounded-sm focus:ring-black dark:focus:ring-white"
              required
            />
            I agree to the Terms and Conditions
          </label>
          <button
            type="submit"
            disabled={isLoading || !agreed}
            className="w-full mt-2 hover:scale-105 duration-300 hover:shadow-xl bg-black dark:bg-white text-white dark:text-black hover:opacity-90 font-medium py-2 rounded-md transition active:scale-95 disabled:opacity-50"
          >
            {isLoading
              ? "Processing..."
              : submitText || (mode === "login" ? "Login" : "Sign Up")}
          </button>
        </form>
        <div className="text-center text-sm text-neutral-700 dark:text-neutral-300 mt-4">
          {mode === "login" ? (
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={toggleMode}
                className="underline hover:text-black dark:hover:text-white"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={toggleMode}
                className="underline hover:text-black dark:hover:text-white"
              >
                Login
              </button>
            </p>
          )}
        </div>
        </div>
        <div className="flex justify-between pt-2">
        <IoMdCloseCircle className="text-neutral-400"/>
        <IoMdCloseCircle className="text-neutral-400"/>
      </div>
      </div>
    </div>
  );
}