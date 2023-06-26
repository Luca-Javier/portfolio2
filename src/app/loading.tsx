import BackgroundAnimation from "@/components/BackgroundAnimation"

function Loading() {
  return (
    <div
      id="loading"
      style={{
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
        position: "fixed",
        inset: 0,
        backgroundColor: "#0F1624",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div style={{ maxWidth: "60%" }}>Loading...</div>
    </div>
  )
}

export default Loading
