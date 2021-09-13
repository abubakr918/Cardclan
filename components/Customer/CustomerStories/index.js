import React, { useState } from 'react'

const array = [
  {
    video: 'https://www.youtube.com/embed/ggFvBKjyqmo',
    focused: false,
  },
  {
    video: 'https://www.youtube.com/embed/z53RRH0gTrw',
    focused: false,
  },
  {
    video: 'https://www.youtube.com/embed/M6r2voY2udM',
    focused: false,
  },
  {
    video: 'https://www.youtube.com/embed/Tk46YRo4_Ig',
    focused: false,
  },
  {
    video: 'https://www.youtube.com/embed/2_mgzpijhY4',
    focused: false,
  },
  {
    video: 'https://www.youtube.com/embed/Q2SR54VVXbQ',
    focused: false,
  },
  {
    video: 'https://www.youtube.com/embed/2kXJLoxYVUo',
    focused: false,
  },
]
function CustomerService() {
  const [click, setClick] = useState(false)
  const [video, setVideo] = useState(array)
  let scrollToSpanRef = {}

  const handleClick = (index) => {
    console.log(index)
    const value = video
    value[index].focused = true
    setClick(true)
    setVideo(value)
  }

  const closeButtonClick = () => {
    let closeVideo = video
    closeVideo.forEach((val, index, array) => {
      closeVideo[index].focused = false
    })
    if (closeVideo[1].focused == false) {
      setVideo(closeVideo)
    }
    setClick(false)
  }

  const scrollDiv = () => {
    // videoRef.current.scrollIntoView({
    //   behavior: "smooth",
    // })
    var testDiv = document.getElementById("containerdiv");
    document.getElementById("invisible-span").innerHTML = testDiv.offsetTop
    const offsetTop = testDiv.offsetTop + 500
    console.log(offsetTop)
    window.scrollTo(0, offsetTop)
    // scrollToSpanRef.scrollIntoViewIfNeeded({ behavior: 'smooth' })
  }



  return (
    <div className='w-7xl mx-auto md:relative container  '>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <div className="px-10 py-5 pt-10 mb-10">
        <h3 className="text-2xl font-bold text-white text-center ">Customer Stories</h3>
        <p className="text-xl font-medium text-white text-center">Stories from some of our fastest-growing customers</p>
      </div>

      <div className=" py-5 flex flex-wrap gap-10 justify-center ">
        {array.map((item, key) => {
          return (<>
            <div id="containerdiv" onClick={() => handleClick(key)}
              className={(click && item.focused ? "md:min-w-full md:bg-white" : "bg-white cursor-pointer transition duration-75 ease-in-out  transform hover:-translate-y-1 hover:scale-110 relative  rounded-xl justify-center  p-2 ")} >
              <a onClick={(e) => {
                e.stopPropagation() //to stop clicking on parent div
                closeButtonClick()
              }} className="bg-themePink text-3xl text-white z-20 w-10 h-10 right-0 top-0 absolute" hidden={click && item.focused ? false : true} ><i class="fa fa-close"></i></a>

              <a ref={(el) => { scrollToSpanRef = el }} id="invisible-span" onClick={() => scrollDiv()} className="md:absolute  md:left-0 md:w-full md:h-5/6 md:top-0" hidden={click && item.focused ? true : false} ></a>

              <iframe
                loading="lazy"
                className={(click && item.focused ? "md:absolute top-0 z-10 mx-auto md:bg-gray-light p-5 rounded-lg  md:w-full md:h-3/4" : "w-full h-60")}
                src={item.video}
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
          </>
          )
        })}
      </div>
    </div >
  )
}

export default CustomerService
