import './Header.css'

const Header = () => {
  return (
    <header className='header--view'>
      <div className='nav-view'>
        <div>
          <img
            width={120}
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
          />
        </div>
        <nav>
          <a href='#'>Home</a>
          <a href='#'>TV Shows</a>
          <a href='#'>Movies</a>
          <a href='#'>Latest</a>
          <a href='#'>My List</a>
        </nav>
      </div>

      <div className='nav-buttons'>
        <button>Deutch</button>
        <button>Einloggen</button>
      </div>
    </header>
  )
}

export default Header
