
import useTheme from "../contexts/Theme"

export const Contact=()=>{
      const {theme} =useTheme();
    return(
        <div className="mt-12">
             <div>
                <h3 className={`${theme==='dark'?'text-white':'text-black'} text-2xl md:text-4xl tracking-tight font-bold`}>Reach me out</h3>
                 
                 <div className={`border  ${theme==='dark'?'border-blue-300  bg-blue-300 bg-opacity-50':'border-green-300 bg-blue-50'} mt-12 w-full rounded-lg p-6 my-4`}>
                      <h2 className={`${theme==='dark'?'text-slate-100':'text-gray-900'} md:text-2xl  text-xl font-bold md:pe-24`}>Want to hire me as a freelancer? Let's discuss.</h2>
                      <p className={`${theme==='dark'?'text-gray-200':'text-gray-500'} text-lg md:text-xl tracking-tighter my-1 mb-5`}>Drop your message and let's discuss about your project.</p>
                      <a href="https://wa.me/6006275359?text=I want to work with you" target="_blank" className="border bg-green-500 p-2 m-2 hover:cursor-pointer rounded-lg text-black text-lg font-semibold" type="submit" >Chat on WhatsApp</a>

                      <div className={`border w-full ${theme==='dark'?' border-gray-400':'border-gray-500'} my-8`}></div>
                        <p className={`font-italic ${theme==='dark'?'text-gray-200':'text-gray-700'} text-lg font-medium`}>Drop in your email ID and I will get back to you.</p>
                        <form className=" relative my-6">
                            <input type="email" placeholder="vishal@gmail.com" className={`px-4  py-2 mt-1 block w-full md:max-w-7xl border border-gray-300 rounded-md ${theme==='dark'?'bg-gray-800 text-gray-200':'bg-white text-gray-900'}`} required></input>
                            <button className={`${theme==='dark'?"text-white":"text-black"}  flex items-center justify-center absolute right-1 top-1 px-4 font-bold h-8 w-28 ${theme==='dark'?'bg-gray-700 text-gray-100 rounded':'bg-gray-100  text-gray-900'}`}>Send</button>
                        </form>
                 </div>
             </div>
        </div>
    )
}