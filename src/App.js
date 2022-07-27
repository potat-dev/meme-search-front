import Page from "./components/Page";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Page>
        <div class='m-5 flex justify-center'>
          <article class="prose lg:prose-xl">
            <h1>
              Garlic bread with cheese: What the science tells us
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin quis metus ac orci interdum ultricies. Nam tincidunt nisi in fringilla iaculis.
              Quisque ut leo nec nisl vestibulum pharetra. Phasellus sed ultrices ex.
              Nam sed justo lacus. Vestibulum at massa est. Nunc sed neque a magna molestie porta.
              Aenean vehicula ante tellus, eu imperdiet lectus viverra ut. Vestibulum eleifend risus erat,
              eget consectetur velit laoreet nec. Morbi lorem massa, vestibulum eget nunc sit amet,
              porta commodo elit. Maecenas et sodales libero, tempus eleifend felis. Etiam quis leo erat.
              Aenean id augue lectus. Phasellus blandit ex arcu, id dignissim magna feugiat sed.
              Curabitur sed euismod lorem. Etiam ornare vel massa id tincidunt.
            </p>
            <p>
              Phasellus euismod nibh non semper ullamcorper. Duis pellentesque felis id venenatis fermentum.
              Nunc vestibulum felis bibendum, tristique ex vel, blandit nulla. Nunc vitae vehicula risus,
              id imperdiet diam. Aenean quis massa ligula. Phasellus fermentum sapien massa, sit amet tempor
              nisl tristique et. Phasellus convallis aliquam vestibulum. Ut libero nulla, elementum quis
              sodales eu, sagittis nec metus. Duis et tincidunt neque, non porttitor erat. Mauris ligula neque,
              vulputate eu molestie ac, consequat id dolor. Integer consectetur urna arcu. Etiam volutpat
              venenatis aliquam. Integer vel libero justo. Quisque consectetur malesuada eros, non malesuada
              nibh imperdiet ut. Nunc vitae gravida diam.
            </p>
            <label for="my-modal" class="btn modal-button">open modal</label>
          </article>
        </div>
        <Modal
          name="my-modal"
          head="Test Modal"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat arcu id purus sollicitudin condimentum. Nunc et nulla ac felis efficitur eleifend ac non est. Suspendisse dapibus gravida tortor eu."
          btnText="OK"
        />
      </Page>
    </div>
  );
}

export default App;
