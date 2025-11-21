"use client";

const ButtonSend = ({ isLoading = false }) => {
  return (
    <button 
      type="submit" 
      disabled={isLoading}
      className="font-inherit text-[15px] bg-[#9C19E0] text-white py-[0.55em] px-[0.7em] flex items-center border-none rounded-[10px] overflow-hidden transition-all duration-200 cursor-pointer hover:not-disabled:active:scale-96 disabled:opacity-60 disabled:cursor-not-allowed group"
    >
      <div className="svg-wrapper-container">
        <div className="svg-wrapper group-hover:not-disabled:animate-fly">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width={24} 
            height={24}
            className="block origin-center transition-transform duration-300 ease-in-out group-hover:not-disabled:translate-x-[1.2em] group-hover:not-disabled:rotate-45 group-hover:not-disabled:scale-110"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
          </svg>
        </div>
      </div>
      <span className="block ml-[0.4em] transition-all duration-300 ease-in-out group-hover:not-disabled:translate-x-[5em]">
        {isLoading ? 'Sending...' : 'Send'}
      </span>
    </button>
  );
}

export default ButtonSend;