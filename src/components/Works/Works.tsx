const Works = () => {
  return (
    <div className="w-full flex flex-wrap gap-20 pt-32" id="works">
      <div className="w-full flex flex-wrap justify-center gap-8">
        <div className="text-[35px] font-bold text-center">How it Works</div>
      </div>
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-12 lg:col-span-4">
          <div className="flex justify-center">
            <button
              type="button"
              className="p-4 bg-blue-400 cursor-pointer rounded-lg text-white font-semibold h-17 w-38 text-xl bg-purple-100 text-[#016099]"
            >
              Step 1
            </button>
          </div>
          <div className="mt-5"></div>
          <div className="flex justify-center">
            <p className="text-base">Upload your PDF document</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-4">
          <div className="flex justify-center">
            <button
              type="button"
              className="p-4 bg-blue-400 cursor-pointer rounded-lg text-white font-semibold h-17 w-38 text-xl bg-purple-100 text-[#016099]"
            >
              Step 2
            </button>
          </div>
          <div className="mt-5"></div>
          <div className="flex justify-center">
            <p className="text-base">Select a quick question or ask your own</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-4">
          <div className="flex justify-center">
            <button
              type="button"
              className="p-4 bg-blue-400 cursor-pointer rounded-lg text-white font-semibold h-17 w-38 text-xl bg-purple-100 text-[#016099]"
            >
              Step 3
            </button>
          </div>
          <div className="mt-5"></div>
          <div className="flex justify-center">
            <p className="text-base">
              Quickly get your questions answered and review
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-wrap justify-center gap-8">
          <div className="text-[35px] font-bold text-center">
            How do we do this?
          </div>
        </div>
        <div className="text-[23px] font-normal">
          By leveraging advanced natural language processing (NLP) techniques
          and deep learning algorithms, Case Cruncher can accurately identify
          and extract critical information, key facts, and arguments from legal
          texts. The software offers a user-friendly interface and customizable
          summary length, enabling lawyers to save time and resources, while
          increasing efficiency and accuracy in their work.
        </div>
      </div>
    </div>
  );
};

export default Works;
