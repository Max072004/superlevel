import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen items-center overflow-hidden justify-center flex px-20 gap-10 text-white bg-[#131313] w-full bggrad'>
        <div className="w-1/2 h-[80vh] border border-[#333] bg-[#191919] flex flex-col">
          <div id="head" className="flex py-6 px-8 justify-between">
            <h1 className="text-3xl tracking-tight font-semibold text-white/60">See Insight</h1>
            <select defaultValue="Choose visualization" className="bg-[#212121] border border-[#333] text-white/80 text-sm rounded-lg focus:ring-0 focus:border-[#444] block w-[200px] p-2.5">
              <option>Choose visualization</option>
              <option value="event">Event</option>
              <option value="document">Document</option>
              <option value="text_post">Text Post</option>
              <option value="gif_animation">GIF Animation</option>
              <option value="reels">Reels</option>
              <option value="carousel">Carousel</option>
              <option value="Document">Document</option>
              <option value="TextPost">Text Post</option>
              <option value="grid">Grid Layout</option>
              <option value="list">List View</option>
            </select>
          </div>
          <div className="w-full flex flex-col gap-4 p-8">
            <textarea 
              className="w-full h-96 bg-[#212121] border border-[#333] text-white/80 rounded-lg p-4 focus:ring-0 focus:border-[#444] resize-none"
              placeholder="Enter your text here..."
            />
            <button className="w-full px-6 py-2 bg-[#212121] border border-[#333] text-white/80 rounded-lg hover:border-[#444] transition-colors">
              Submit
            </button>
          </div>
        </div>
        <div className="w-1/2 h-[80vh] border border-[#333] bg-[#191919] "></div>
    </div>
  )
}

export default page