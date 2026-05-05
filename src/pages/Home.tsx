import Hero from "../components/Hero";
import Page from "./Page";

function Home() {
  return (
    <>
      <div className="p-8 md:p-15">
        <Page>
          <section>
            <Hero />
          </section>

          {/*  benefits */}
          <section>
            <div>
              <h2>Benefits</h2>
              <p>Benefits here</p>
            </div>
          </section>
          {/* Services */}
          <section>
            <div>
              <h2>Benefits</h2>
              <p>Benefits here</p>
            </div>
          </section>
          {/* Final CTA */}
          <section>
            <div>
              <h2>Final cta</h2>
              <button>CTA</button>
            </div>
          </section>
        </Page>
      </div>

      {/* Fotter */}
      <footer>
        <div>Footer elements here</div>
      </footer>
    </>
  );
}

export default Home;
