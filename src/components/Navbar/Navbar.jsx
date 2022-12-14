import styled from "styled-components";
import { navLinks } from "../../utils/navbar";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context/AppContext";

const Navbar = () => {
  const { openModal } = useGlobalContext();
  return (
    <Wrapper>
      <section className="section-center">
        <div className="logo-container">
          <figure className="logo">
            <img src="images/Navbar/logo.svg" alt="" />
          </figure>
          <button className="toggle-sidebar" onClick={openModal}>
            <FaBars />
          </button>
        </div>

        <article className="nav-links">
          <ul>
            {navLinks.map(({ id, name, redirect }) => {
              return (
                <li key={id}>
                  <a href={redirect}>{name}</a>
                </li>
              );
            })}
          </ul>

          <button className="btn">sign up</button>
        </article>
      </section>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  background-color: var(--clr-primary1);
  padding: 1rem 0;

  .logo-container {
    display: flex;
    justify-content: space-between;
  }

  .toggle-sidebar {
    color: white;
    background: transparent;
    display: grid;
    place-items: center;
    font-size: 1.8rem;
    border: none;
  }

  .logo {
    width: 200px;
  }

  .nav-links {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .toggle-sidebar {
      display: none;
    }
    .section-center {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nav-links {
        display: flex;
        gap: 0 2.5rem;
        align-items: center;
        ul {
          display: flex;
          gap: 0 1.5rem;
        }
      }
    }
  }
`;
