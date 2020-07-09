import upload from './upload';
import "./index.css";

window.addEventListener('DOMContentLoaded', (event) => {
  const status = document.getElementById("status");
  document.getElementById("input").addEventListener("change", handleFiles, false);

  function handleFiles() {
    const file = this.files[0];
    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = async () => {
      const buffer = await Buffer.from(reader.result);

      status.innerHTML = "Uploading...";

      const gateway = await upload(buffer);

      status.innerHTML = `Uploaded <a href="${gateway}" target="_blank">here</a>`;
    };
  }
});
