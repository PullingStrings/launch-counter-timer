import FlipClock from "./components/FlipClock"

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "2rem 0",
        backgroundColor: "hsl(235, 16%, 14%)",
        backgroundImage: "url(./images/bg-stars.svg)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1>We&rsquo;re launching soon</h1>
        <FlipClock />
      </div>
      <img
        style={{
          position: "absolute",
          bottom: 0,
        }}
        src={"./images/pattern-hills.svg"}
        alt={"pattern-hills"}
      />
    </main>
  )
}
