import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Memory = ({
  memoryImg,
  memoryTitle,
  memoryContent,
  memoryDate,
  reverse = false,
}) => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [clickedElement, setClickedElement] = useState("");

  const flexDirection = reverse ? "row-reverse" : "row";

  const toggleModal = (element) => {
    setClickedElement(element);
    setModalOpen(!modalOpen);
  };

  // Função para ajustar a altura do texto para corresponder à imagem
  const adjustTextHeight = () => {
    if (imageRef.current && textRef.current && window.innerWidth > 1024) {
      // Obtém a altura da imagem
      const imageHeight = imageRef.current.clientHeight;

      // Define a altura do container de texto
      textRef.current.style.height = `${imageHeight}px`;

      // Agora precisamos garantir que o conteúdo interno seja visível
      if (contentRef.current) {
        // Calculamos o tamanho disponível para o conteúdo após o título
        const titleHeight =
          contentRef.current.querySelector("h2")?.offsetHeight || 0;
        const padding = 20; // padding do memory__text
        const contentArea = imageHeight - titleHeight - padding * 2 - 20; // 20px extra para margens internas

        // Aplicamos o estilo para a área de conteúdo
        const contentDiv = contentRef.current.querySelector(".scroll-content");
        if (contentDiv) {
          contentDiv.style.maxHeight = `${contentArea}px`;
        }
      }
    } else if (textRef.current) {
      // Em telas menores, removemos as restrições de altura

      textRef.current.style.height = "auto";
      const contentDiv = contentRef.current?.querySelector(".scroll-content");
      if (contentDiv) {
        contentDiv.style.maxHeight = "none";
      }
    }
  };

  useEffect(() => {
    // Ajustamos quando o componente montar
    const img = new Image();
    img.src = memoryImg;
    img.onload = adjustTextHeight;

    // Também ajustamos quando a janela for redimensionada
    window.addEventListener("resize", adjustTextHeight);

    // Limpeza na desmontagem
    return () => {
      window.removeEventListener("resize", adjustTextHeight);
    };
  }, []);

  return (
    <>
      <div className="memory" style={{ flexDirection: flexDirection }}>
        <img
          ref={imageRef}
          className="memory__image"
          src={memoryImg}
          alt="Colagem de fotos especiais"
          onLoad={adjustTextHeight}
          onClick={() => toggleModal("image")}
        />
        <div
          ref={textRef}
          className="memory__text"
          onClick={() => toggleModal("text")}
        >
          <div
            ref={contentRef}
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
            className="memory__text-content"
          >
            {memoryDate && <span className="memory__date">{memoryDate}</span>}
            <h2>{memoryTitle}</h2>
            <div className="memory__scroll-content">
              <p>{memoryContent}</p>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="memory__modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="memory__modal-close"
              onClick={() => setModalOpen(false)}
            />
            {clickedElement === "image" ? (
              <motion.img
                src={memoryImg}
                alt="Imagem Ampliada"
                className="memory__modal-image"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <motion.div
                className="memory__modal-text"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {memoryDate && (
                  <span className="memory__date">{memoryDate}</span>
                )}
                <h2>{memoryTitle}</h2>
                <div className="memory__scroll-content">
                  <p>{memoryContent}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Memory;
