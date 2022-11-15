import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <article className="header">
          <h1 className="title">
            <span className="underline">train your</span> workforce
          </h1>

          <p className="subtitle">
            Train your workfrorce effeciently, give them an edge in the real
            world. Drive business growth by creating training campaigns.
          </p>

          <button className="btn">join now</button>
        </article>

        <figure>
          <img src="images/Hero/img1.png" alt="" />
        </figure>
      </section>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  height: calc(100vh - 93.69px);
  background-color: var(--clr-primary1);
  display: grid;
  align-content: center;

  .section-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    align-content: center;

    .btn {
      padding: 0.8rem 2.5rem;
    }

    .underline::before {
      background-color: var(--clr-secondary1);
    }
  }
`;
