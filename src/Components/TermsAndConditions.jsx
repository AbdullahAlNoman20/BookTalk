const TermsAndConditions = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-orange-400">
                <h3 className="text-3xl font-semibold">Terms and conditions</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
                  BookTalk book reading website
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-orange-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Membership and Account{" "}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                    Dec 2023
                  </time>
                  <p className="mt-3">
                    By registering an account with BookTalk, you agree to
                    provide accurate and complete information about yourself.
                    You are responsible for maintaining the confidentiality of
                    your account and password and for restricting access to your
                    computer to prevent unauthorized access to your account. You
                    agree to accept responsibility for all activities that occur
                    under your account or password.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-orange-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Content Usage
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                    Jul 2020
                  </time>
                  <p className="mt-3">
                    Users may contribute content to BookTalk, including book
                    reviews, comments, and forum posts. By submitting content,
                    you grant BookTalk a non-exclusive, royalty-free, perpetual,
                    irrevocable, and fully sublicensable right to use,
                    reproduce, modify, adapt, publish, translate, create
                    derivative works from, distribute, and display such content
                    throughout the world in any media.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-orange-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Intellectual Property
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                    Jan 2024
                  </time>
                  <p className="mt-3">
                    The content on BookTalk, including text, graphics, logos,
                    button icons, images, audio clips, digital downloads, data
                    compilations, and software, is the property of BookTalk or
                    its content suppliers and is protected by international
                    copyright laws. You may not modify, publish, transmit,
                    participate in the transfer or sale of, reproduce, create
                    derivative works based on, distribute, or perform any of the
                    content on the site without express written permission from
                    BookTalk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
