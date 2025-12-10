

export default function TechCarousel() {
  return (
    <section id="stack" className="py-20 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Stack</h2>
      <div className="scroller">
        <ul className="tag-list scroller__inner">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>Laravel</li>
            <li>ReactJS</li>
        </ul>
      </div>
      <div class="scroller" data-direction="right" data-speed="slow">
  <div class="scroller__inner">
    <img src="https://i.pravatar.cc/150?img=1" alt="" />
    <img src="https://i.pravatar.cc/150?img=2" alt="" />
    <img src="https://i.pravatar.cc/150?img=3" alt="" />
    <img src="https://i.pravatar.cc/150?img=4" alt="" />
    <img src="https://i.pravatar.cc/150?img=5" alt="" />
    <img src="https://i.pravatar.cc/150?img=6" alt="" />
  </div>
</div>
    </section>
  );
}
