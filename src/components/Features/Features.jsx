import { featuresData } from "../../utils/data";
import { v4 as uid } from "uuid";
import styled from "styled-components";

const Features = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <header className="header">
          <h1 className="title">
            <span className="underline"> main feature</span>
          </h1>
          <p className="subtitle">
            Our main features and solutions for your employees
          </p>
        </header>

        <article className="tiles-container">
          {featuresData.map(({ title, subtitle, src }) => {
            return (
              <div className="tile" key={uid()}>
                <figure className="icon">
                  <img src={src} alt="" />
                </figure>

                <article className="info">
                  <h2>{title}</h2>
                  <p>{subtitle}</p>
                </article>
              </div>
            );
          })}
        </article>
      </section>
      <div className="feature-footer">
        <figure>
          <img src="images/features/footer.png" alt="" />
        </figure>
      </div>
    </Wrapper>
  );
};

export default Features;

const Wrapper = styled.section`
  padding-top: 5rem;

  .header {
    text-align: center;
    margin-bottom: 8rem;
    display: grid;
    gap: 1rem 0;

    * {
      margin: 0 auto;
    }

    .underline::before {
      background-color: var(--clr-primary4);
    }

    .subtitle {
      color: var(--clr-grey1);
      font-weight: 700;
    }
  }

  .tiles-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8rem 0;
    margin-bottom: 5rem;

    .tile {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 4rem;
      margin: 0 auto;
    }

    .icon {
      width: 4rem;
      height: 4rem;
      position: relative;
      display: grid;
      place-items: center;

      img {
        object-fit: contain;
      }

      ::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid var(--clr-primary2);
        border-radius: 0.5rem;
        transform: rotate(45deg);
        padding: 1rem;
      }
    }

    .info {
      text-transform: capitalize;

      p {
        font-size: 1.2rem;
        color: var(--clr-grey1);
        font-weight: 700;
      }
    }
  }
`;
