import { footerData } from "../../utils/data";
import { socialLinks } from "../../utils/data";
import { v4 as uid } from "uuid";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <article className="footer-title">
          <figure className="footer-logo">
            <img src="images/Footer/logo.svg" alt="" />
          </figure>
          <p className="subtitle">
            A platform to train your employees and manage their onboarding
            process
          </p>
          <p>Trademark - {new Date().getFullYear()}</p>
        </article>

        <article className="footer-links">
          {footerData.map(({ title, links }) => {
            return (
              <div className="footer-section" key={uid()}>
                <h3>{title}</h3>
                <ul>
                  {links.map(({ name, href }) => {
                    return (
                      <li key={uid()}>
                        <a href={href}>{name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </article>

        <article className="footer-icons">
          {socialLinks.map(({ icon, href }) => {
            return (
              <div key={uid()}>
                <a href={href} target="_blank">
                  {icon}
                </a>
              </div>
            );
          })}
        </article>
      </section>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding-bottom: 4rem;

  .section-center {
    display: flex;
    gap: 0 3rem;

    .footer-title {
      .footer-logo {
        width: 150px;
        margin-bottom: 1rem;
      }

      .subtitle {
        max-width: 25rem;
      }
    }

    .footer-links {
      display: flex;
      gap: 0 5rem;

      .footer-section {
        display: grid;
        gap: 1.5rem 0;

        h3 {
          text-transform: uppercase;
          color: var(--clr-primary2);
        }

        ul {
          display: grid;
          gap: 1rem 0;

          a {
            color: var(--clr-grey1);
            font-weight: 700;
            text-transform: capitalize;
          }
        }
      }
    }

    .footer-icons {
      display: flex;
      align-items: flex-start;
      gap: 0 1rem;

      div {
        background-color: var(--clr-grey2);
        display: grid;
        place-items: center;
        padding: 0.5rem;
        border-radius: 50%;
        width: 2.2rem;
        height: 2.2rem;

        a {
          color: var(--clr-primary3);
          display: grid;
          place-items: center;
          * {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
`;
