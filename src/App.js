import './App.css';
import logo from './images/lorimer.JPG';

function App() {
  return (
    <div class ='background'>

      <div class='links-card'>
        <div class='img-wrap'>
          <a href='/'><img src={logo} class='image'/></a>
        </div>
        <h1 class='title'><a href='/'>Lorimer Jenkins</a></h1>
        <a href='/'><p class='para'>A Crypto Enthusiast/Dev</p></a>
        <div class='links'>
          <a href='mailto:lorimerjenkins1@gmail.com' class='link'>Email</a>
          <a href='https://t.me/lorimer_jenkins' class='link' target='_blank'>Telegram</a>
          <a href='https://calendly.com/lorimerjenkins' class='link' target='_blank'>Calendly</a>
          <a href='https://twitter.com/lorimer_jenkins' class='link' target='_blank'>Twitter</a>
          <a href='https://github.com/LorimerJenkins' class='link' target='_blank'>GitHub</a>
          <a href='https://lorimer.arweave.dev' class='link' target='_blank'>Perma Page</a>
          <a href='https://subanalytics.org' class='link' target='_blank'>Sub Analytics</a>
          <a href='https://keys.mailvelope.com/pks/lookup?op=get&search=lorimer@wallety.org' class='link' target='_blank'>PGP Key</a>
          <a href='https://www.linkedin.com/in/lorimerjenkins/' class='link' target='_blank'>LinkedIn</a>
          <a href='https://matrix.to/#/@lorimer:matrix.org' class='link' target='_blank'>Element</a>
          <a href='https://www.instagram.com/lorimer_jenkins/' class='link' target='_blank'>Instagram</a>
          <a href='https://lorimerjenkins.medium.com/' class='link' target='_blank'>Medium</a>
          <a href='https://opensea.io/Lorimer_Jenkins' class='link' target='_blank'>Lorimer.eth</a>
        </div>
      </div>




    </div>

  );
}
export default App;