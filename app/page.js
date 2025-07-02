
import ButtonLogin from "@/components/buttonlogin";
export default function Home() {
  const isLoggedIn = true; // Simulating login state
  const name = "John Doe"; // Simulating user name

  return (
    <main>
          <section className="bg-base-200 ">
            <div className="flex justify-between items-center px-8 py-4 max-w-4xl mx-auto md:">
                   <div className="font-bold">CodeFastSaas</div>
                  <div className="space-x-4"> 
                      <a className="link link-success hidden md:inline-block">pricing</a>
                       <a className="link link-success hidden md:inline-block ">FAQ</a>
                  </div>
                    <div className="bg-green-400"> <ButtonLogin isLoggedIn={isLoggedIn} name={name}>
                    </ButtonLogin></div>
            </div>
      
    </section>
    <section className="px-8 text-center py-32 max-w-3xl mx-auto lg:text-5xl ">
         
         <h1 className="text-4xl font-extrabold mb-6">Collect customer Feedback To build Better Products</h1>
         <div className="opacity-90 mb-10">Create a feedback board in minuits , Prioritize features and build products your customers will love</div>
         <ButtonLogin isLoggedIn={isLoggedIn} name={name}>
         </ButtonLogin>
    </section>
    </main>
    
  );
}
