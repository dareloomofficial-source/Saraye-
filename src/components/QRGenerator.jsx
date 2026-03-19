// src/components/QRGenerator.jsx
import { useState, useRef } from 'react';
import QRCode from 'qrcode';
import { X, Download, Copy, QrCode as QrIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const QRGenerator = ({ store }) => {
  const [qrUrl, setQrUrl] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef(null);

  const storeUrl = `${window.location.origin}/store/${store.id}`;

  const generateQR = async () => {
    try {
      const dataUrl = await QRCode.toDataURL(storeUrl, {
        width: 320,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff'
        }
      });
      setQrUrl(dataUrl);
      setShowModal(true);
    } catch (err) {
      console.error('QR generation failed:', err);
    }
  };

  const handleDownload = () => {
    if (!qrUrl) return;
    const link = document.createElement('a');
    link.download = `Saraye-${store.name}-QR.png`;
    link.href = qrUrl;
    link.click();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(storeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={generateQR}
        className="flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-gold to-yellow-500 text-black font-medium rounded-2xl shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:scale-[1.02] transition-all duration-300"
      >
        <QrIcon size={20} />
        Generate Menu QR
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glass max-w-md w-full rounded-3xl overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10 text-center">
              <h3 className="text-2xl font-heading font-bold text-gold mb-6">
                {store.name} Menu QR
              </h3>

              {/* QR Code Display */}
              <div className="bg-white p-6 rounded-2xl inline-block mb-8 shadow-2xl">
                {qrUrl ? (
                  <img
                    src={qrUrl}
                    alt="Store QR Code"
                    className="w-64 h-64 object-contain"
                    ref={canvasRef}
                  />
                ) : (
                  <div className="w-64 h-64 flex items-center justify-center">
                    Generating...
                  </div>
                )}
              </div>

              <p className="text-gray-300 mb-6 text-sm">
                Scan to open {store.name} on any phone
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gold text-black rounded-xl hover:bg-white transition font-medium"
                >
                  <Download size={18} />
                  Download PNG
                </button>

                <button
                  onClick={handleCopy}
                  className={`flex items-center justify-center gap-2 px-6 py-3 border border-gold/50 rounded-xl transition font-medium ${
                    copied 
                      ? 'bg-gold/20 text-gold border-gold' 
                      : 'hover:bg-gold/10 text-gold'
                  }`}
                >
                  <Copy size={18} />
                  {copied ? 'Link Copied!' : 'Copy Link'}
                </button>
              </div>

              {/* Direct Link */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-gray-500 mb-2">Direct link:</p>
                <div className="glass px-4 py-3 rounded-xl text-sm break-all text-gray-300">
                  {storeUrl}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default QRGenerator;
