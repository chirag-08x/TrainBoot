import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { navLinks } from "../../utils/navbar";
import { useGlobalContext } from "../../context/AppContext";

const Sidebar = () => {
  const {
    state: { isModalOpen },
    closeModal,
  } = useGlobalContext();
  if (isModalOpen) {
    return (
      <Wrapper>
        <aside className="container">
          <div className="logo">
            <img src="images/Navbar/logo.svg" alt="" />
            <button onClick={closeModal}>
              <FaTimes />
            </button>
          </div>

          <article className="sidebar-links">
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
        </aside>
      </Wrapper>
    );
  }

  return null;
};

export default Sidebar;

const Wrapper = styled.aside`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;

  .container {
    background-color: var(--clr-primary1);
    padding: 2rem;
    max-width: 25rem;
    height: 100%;

    .logo {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5rem;

      button {
        color: red;
        font-size: 2rem;
        background: transparent;
        border: none;
        display: grid;
        place-items: center;
      }
    }

    .sidebar-links {
      display: grid;
      gap: 3rem 0;
      ul {
        display: grid;
        gap: 2rem 0;
      }
    }
  }
`;
