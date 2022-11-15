import { navData } from "../../utils/data";
import { v4 as uid } from "uuid";
import { AiFillSetting } from "react-icons/ai";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <div className="nav-header">
          <img src="images/navbar/logo.svg" alt="" />
        </div>

        <ul className="nav-links">
          {navData.map(({ name, href }) => {
            return (
              <li key={uid()}>
                <a href={href}>{name}</a>
              </li>
            );
          })}
        </ul>

        <div className="nav-btns">
          <button className="login-btn">login</button>
          <button className="btn">register</button>
          <button className="settings">
            <AiFillSetting />
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  background-color: var(--clr-primary1);
  position: relative;

  .section-center {
    display: grid;
    grid-template-columns: 5rem 2fr 1fr;
    align-items: center;

    .nav-links {
      display: flex;
      gap: 0 2rem;
      justify-self: center;

      a {
        font-weight: 700;
      }
    }

    .nav-btns {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0 2rem;
      background: var(--clr-primary2);
      height: 100%;
      border-radius: 1rem;

      .login-btn {
        color: var(--clr-white);
        font-weight: 700;
      }

      .settings {
        color: white;
        font-size: 1.5rem;
      }
    }
  }
`;
