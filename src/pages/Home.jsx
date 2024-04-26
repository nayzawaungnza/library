import HeroSection from "../components/HeroSection"
import lifeofthecandle from "../assets/life-of-the-candle.jpg"

function Home() {

  return (
    <>
      <HeroSection />
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
      {[1,2,3,4,5].map(()=>(
        <div className=" p-4 border border-1">
          <img src={lifeofthecandle} alt="" />
          <div className="text-center space-y-2 mt-3">
            <h1 className="">Book Title</h1>
            <p className="">Description</p>
            <div className="flex flex-wrap">
              {['travels','knowledge', 'internet', 'programming'].map(genre =>(
                <span className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500">{genre}</span>
              ))}
            </div>
          </div>
          
        </div>
      ))}
     </div>
    </>
  )
}

export default Home
