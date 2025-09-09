
import Image from "next/image";



export default function Home() {
  return (
    
    <>
      <section>      
         <div className="container">
          <div className="flex flex-column justify-center items-center">
    <h1 className=" headingA text-yellow-500 text-3xl lg:text-6xl text-center">Gastlichkeit ist unsere Philosophie</h1>
    </div>

    <div className="cards-container rounded-2xl">
      <div className="card bg-yellow-500">
        <div className="stripe cyan"></div>
        <div className="card-content-container bg-yellow-500">
          <h2 className="uppercase font-black text-white">Flens vom Fass</h2>
          <p className="card-p">Flensburger Pils - das kühle Blonde von der Waterkant. Astra-Pils - das Kultbier natürlich direkt vom Kiez !</p>
          <div className="card-Image-container">
            <Image className="card-Image" src="/Bierglas99.svg" width={200} height={200} alt="Supervisor Icon" />
          </div>
        </div>
      </div>
      <div className="column-flex">
        <div className="card bg-yellow-500 ">
          <div className="stripe red"></div>
          <div className="card-content-container bg-yellow-500">
            <h2 className="uppercase text-white font-black">regionale Weine</h2>
            <p className="card-p">
             Qualitativ hochwertige Weine aus der Region Kaiserstuhl und dem Markgräflerland. Hauslieferant Weingut Heinemann Scherzingen.</p>
            <div className="card-Image-container">
              <Image className="card-Image" src="/weinIcon.svg" width={200} height={200} alt="Team builder Icon"/>
            </div>
          </div>
        </div>
        <div className="card bg-yellow-500">
          <div className="stripe orange mt"></div>
          <div className="card-content-container bg-yellow-500">
            <h2 className="uppercase text-white font-black">Cocktails und Longdrinks</h2>
            <p className="card-p">Zahlreiche internationale Longdrinks und Cocktaila - alles was das Herz begehrt. Zahlreiche "Kurze" für jeden Geschmack.</p>
            <div className="card-Image-container">
              <Image className="card-Image" src="/cocktailIcon.svg" width={200} height={200} alt="Cocktail Icon"/>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-yellow-500">
        <div className="stripe blue"></div>
        <div className="card-content-container bg-yellow-500">
          <h2 className="uppercase text-white font-black">Fussball: Live-TV</h2>
          <p className="card-p"> Jeden Samstag-Spieltag der laufenden Bundesliga-Saison Live TV Event in unserer Sportarena natürlich mit Schwerpunkt unseres SC Freiburgs. Wann immer möglich auch Spiele der Champions League und natürlich der grossen Turniere von EM und WM. Bei Topspielen des SC Freiburg mit grosser Publikumsnachfrage sind Reservierungen über unser Booking-Tool zu empfehlen - Unten folgender Button und Du bist direkt dabei !
            </p>
          <div className="card-Image-container">
            <Image className="card-Image" src="/FootballIcon.svg" width={200} height={200} alt="Football Icon"/>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>
    </>
  );
}
