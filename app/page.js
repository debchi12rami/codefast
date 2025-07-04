
import ButtonLogin from "@/components/buttonlogin";
import FAQListItem from "@/components/faqlisttem";
import Image from "next/image";
import productDemo from "@/app/productDemo.jpg";
export default function Home() {
  const isLoggedIn = true; // Simulating login state
  const name = "Rami"; // Simulating user name

  return (
  <main>
      {/* header section */}
    <section className="bg-base-200 ">
            <div className="flex justify-between items-center px-8 py-4 max-w-4xl mx-auto md:">
                   <div  className="font-bold">CodeFastSaas</div>
                  <div className="space-x-4"> 
                      <a className="link link-success hidden md:inline-block" href="#pricing">pricing</a>
                       <a className="link link-success hidden md:inline-block " href="#FAQ">FAQ</a>
                  </div>
                    <div className="bg-green-400"> <ButtonLogin isLoggedIn={isLoggedIn} name={name}>
                    </ButtonLogin></div>
            </div>
      
    </section>
    {/* hero section */}
    <section className="px-8 text-center py-16 max-w-3xl mx-auto lg:text-5xl   ">
         <Image className="mb-4  " src={productDemo}></Image>
          <div className="flex-1">
             <h1 className="text-4xl font-extrabold mb-6 flex col">Collect customer Feedback To build Better Products</h1>
         <div className="opacity-90 mb-10">Create a feedback board in minuits , Prioritize features and build products your customers will love 100</div>
         <ButtonLogin isLoggedIn={isLoggedIn} name={name}>
         </ButtonLogin>
          </div>
    </section>

    {/* pricing section */}
    <section className="bg-base-300" id="pricing">
       <div className="py-32 px-8 mex-w-3xl mx-auto">
        <p className="text-sm text-center uppercase font-medium text-primary mb-4">Pricing</p>
        <h2 className="text-3xl font-extrabold lg:text-5xl text-center mb-12">
          A pricing That Adapts To Your Needs
        </h2>
        <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
          <div className="flex gap-2 items-baseline">
          <div className="text-4xl font-black ">
            $19.99
          </div>
          <div className="uppercase text-sm font-medium opacity-60">
            /month
          </div>
          </div>
          <ul className="space-y-2">
            {
            ["Collect Customer Feedback" ,
             "Unlimited Boards" , 
             "Admin Dashboard" , 
             "24/7 Support",
             "Custom Domain" ,
             "Custom Branding" ,
            ].map((priceItem) => {
              return <li className="flex gap-2 items-center " key={priceItem}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  className="text-green-800 size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              {priceItem}</li> 
            })}
          </ul>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name} extraStyle="w-full"></ButtonLogin>
        </div>
       </div>
       {/* <Example>this is the example</Example> */}
    </section>

    {/* FAQ Section */}
    <section className="bg-base-200" id="FAQ">
      <div className="py-32 px-8 max-W-3xl mx-auto ">
        <p className="text-sm uppercase font-medium text-center text-green-600">
          FAQ
        </p>
        <h2 className="text-3xl lg:text4xl font-extrabold mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <ul>
          {
            [
              {question:"what do i get exactly" ,
               answer : "you get what you want"},
              {question:"I have another question " ,
               answer : "you get what you want"},
              {question:"what do you think if i do this" ,
               answer : "you get what you want"},
            ].map((qa) => (
             <FAQListItem key={qa.question} qa={qa} />
            ))}
        </ul>
      </div>
    </section>
  </main>
  );
}
