import {useState,useEffect} from 'react'
import CardioNavbar from '../../components/Navbar/CardioNavbar'
import Footer from '../../components/Footer/Footer'
import CardioMain from '../../components/CardioMain/CardioMain'
import Resena from '../../components/Resena/Resena'
import usePediatra from '../../hooks/usePediatra';
import WelcomeUser from '../../components/WelcomeUser/WelcomeUser'
import ShowResenas from '../../components/ShowResenas/ShowResenas'

const Home = () => {
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
  const [dataUser]=usePediatra();
  const [isNewResena, setIsNewResena] = useState(false);


  useEffect(()=>{
    if(isNewResena) {
      //console.log('Resena agregada (se supone que vuelve a pintar home??):...');
    }
  },[isNewResena])

  useEffect(()=>{
    
      console.log('dataUser (home)...',dataUser);
    
  },[dataUser])

  const handleToogleNewResena = ()=>{
    setIsNewResena(prev=>!prev);
  }

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  const  downloadApp= async()=> {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  return (
    <div>
        <CardioNavbar/>
        {/* <div>
        {dataUser?.name}
        {dataUser?.email}
        </div> */}
        {dataUser?.name!==''&&<WelcomeUser/>}
        {isReadyForInstall && <button className='btn btn-outline-danger d-block ms-auto me-auto my-3' onClick={downloadApp}> Instalar </button>}
        <CardioMain/>
        <Resena handleToogleNewResena={handleToogleNewResena}/>
        <ShowResenas handleToogleNewResena={handleToogleNewResena} isNewResena={isNewResena}/>
        <Footer/>
    </div>
  )
}

export default Home