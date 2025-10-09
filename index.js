
      window.addEventListener("DOMContentLoaded", () => {
        const url = document.getElementById("url");
        const errorMsg = document.getElementById("errorMsg");
        const previewMsg = document.getElementById("previewMsg");
        const generateBtn = document.getElementById("generateBtn");
        const downloadBtn = document.getElementById("downloadBtn");
        const canvas = document.getElementById("qr");

        const qr = new QRious({ element: canvas, value: "", size: 256 });

        function disableButtons(disabled) {
          downloadBtn.disabled = disabled;
          generateBtn.disabled = disabled;
        }

        function generateQRCode() {
          const urlValue = url.value.trim();
          if (!urlValue) {
            errorMsg.textContent = "Please enter URL to encode.";
            qr.value = "";
            return;
          }
          errorMsg.textContent = "";
          qr.value = urlValue;
          previewMsg.textContent = "QR generated — use the Download button to save.";
          disableButtons(false);
        
        }

        generateBtn.addEventListener("click", generateQRCode);

        downloadBtn.addEventListener("click", () => {
          const dataUrl = canvas.toDataURL("image/png");
          const a = document.createElement("a");
          a.href = dataUrl;
          a.download = "qr.png";
          document.body.appendChild(a);
          a.click();
          a.remove();
        });

        url.value = "";
        disableButtons(false);
      });
