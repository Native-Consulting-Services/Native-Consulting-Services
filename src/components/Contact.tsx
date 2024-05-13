import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xjvnzowg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-22">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Contact Us
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please fill out the form below to discuss your project.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Please enter name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Please enter email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Please enter message"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={state.submitting}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
