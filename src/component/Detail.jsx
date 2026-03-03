import "./Detail.css";

function Detail() {
  return (
    <div className="app">
      <ProfileCard
        name="Ayuba Ibrahim Olanrewaju (Darey Digitals)"
        title="Frontend Developer | Backend Developer | UI/UX Designer | Tech Enthusiast"
        bio="Passionate about building modern and responsive web applications Using | HTML | CSS | React | PHP | Python. Always eager to learn and explore new technologies in the ever-evolving world of web development."
        image="./assets/profile.png"
        portfolio="https://dareydigitals.netlify.app"
      />
    </div>
  );
}

function ProfileCard({ name, title, bio, image, portfolio }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="avatar" />

      <h2>{name}</h2>
      <h4>{title}</h4>
      <p>{bio}</p>

      <a
        href={portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        View Portfolio
      </a>
    </div>
  );
}

export default Detail;