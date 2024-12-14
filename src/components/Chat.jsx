import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa"; // Icon for chat button and close button
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Select from "react-select";

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [awaitingResponse, setAwaitingResponse] = useState(false);
  const [srcId, setSrcId] = useState("");
  const pdfUrl = `https://gxp-api.mydemosoftware.com/pdfs/VidyaGxP_Detailed_Report2.pdf`;
  const chatPdfConfig = {
    headers: {
      "x-api-key": "sec_qLUcsYBeIWAt564Tk5zhHg76DQHjastL",
      "Content-Type": "application/json",
    },
  };

  const initializeChatModal = async (data) => {
    try {
      const addPdfUrl = "https://api.chatpdf.com/v1/sources/add-url";

      const res = await axios.post(addPdfUrl, data, chatPdfConfig);

      setSrcId(res?.data?.sourceId);
    } catch (err) {
      // console.log("Error in initializeChatModal fn", err.message);
    }
  };

  useEffect(() => {
    initializeChatModal({
      url: pdfUrl,
    });
  }, []);

  const convertToHtml = (response) => {
    return response
      .replace(/<\/?p>/g, "") // Remove <p> tags
      .replace(/<br\s*\/?>/g, "\n") // Replace <br> with line breaks
      .replace(/<[^>]*>/g, "") // Remove any other HTML tags
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Replace **text** with <strong>text</strong>
      .replace(/&nbsp;/g, " ") // Replace non-breaking spaces
      .replace(/\n/g, "<br>") // Replace newlines with <br> for HTML display
      .trim(); // Trim leading and trailing spaces
  };
  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return toast.error("Please enter a message");
    if (!awaitingResponse) {
      setAwaitingResponse(true);
      if (newMessage.trim() !== "") {
        setMessages([...messages, { text: newMessage, sender: "user" }]);
        setNewMessage("");

        let chatData = {
          sourceId: srcId,
          messages: [
            {
              role: "user",
              content: newMessage,
            },
          ],
        };

        try {
          const pdfRes = await axios.post(
            "https://api.chatpdf.com/v1/chats/message",
            chatData,
            chatPdfConfig
          );

          // Clean the response using the utility function
          const rawResponse = pdfRes.data.content || "";
          const formattedResponse = convertToHtml(rawResponse);

          // Safely set the cleaned response as a message
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: formattedResponse, sender: "bot" },
          ]);
        } catch (error) {
          console.error("Error sending message:", error);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "Failed to send message. Please try again.",
              sender: "bot",
            },
          ]);
        } finally {
          setAwaitingResponse(false);
        }
      }
    }
  };

  return (
    <>
      <div className="h-100 position-fixed" style={{ zIndex: "999999" }}>
        {!isChatOpen && (
          <div
            className="position-fixed bottom-0 end-0 me-3 mb-3 btn bg-yellow rounded-circle shadow-lg"
            onClick={() => setIsChatOpen(true)}
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "#FFCA00",
              color: "white",
              padding: "10px",
              paddingBottom: "-10px",
            }}
          >
            <FaComments size={34} />
          </div>
        )}

        {/* Chatbox */}
        {isChatOpen && (
          <div
            className="position-fixed bottom-0 end-0 me-3 mb-3"
            style={{ backdropFilter: "blur(10px) !important" }}
          >
            <div className="card w-450px">
              <div
                className="card-header  text-white d-flex justify-content-between align-items-center p-2"
                style={{ height: "50px", backgroundColor: "#4773a6" }}
              >
                <h5 className="mb-0" style={{ color: "white" }}>
                  Hello, How can I help you?
                </h5>
                <FaTimes
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setIsChatOpen(false)}
                  style={{ color: "white", cursor: "pointer" }}
                />
              </div>
              <div
                className="card-body  overflow-y-auto"
                style={{ height: "500px", width: "450px" }}
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-2 my-1 rounded-lg mt-2  ${
                      message.sender === "user" ? " text-end " : "  text-start "
                    }`}
                    style={{
                      // display: "flex",
                      // alignItems:
                      //   message.sender === "user" ? "flex-start" : "flex-start",
                      marginLeft: message.sender === "user" ? "80px" : "0px",
                      marginRight: message.sender === "user" ? "0px" : "80px",
                      // color: message.sender === "user" ? "white" : "black",

                      backgroundColor:
                        message.sender === "user" ? "#4773a6" : "#ebeced",
                      // maxWidth: "fit-content",
                      borderRadius: "10px",
                      color: message.sender === "user" ? "white" : "black",
                    }}
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html: message.text,
                      }}
                    ></p>
                  </div>
                ))}
              </div>
              <div
                className="card-footer border-top"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  gap: "10px",
                }}
              >
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="form-control"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={awaitingResponse}
                  className="btn btn-primary "
                  style={{
                    backgroundColor: "#4773a6",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    maxHeight: "100%",
                  }}
                  // onKeyDown={(e) => {
                  //   if (e.key === "Enter") {
                  //     handleSendMessage();
                  //   }
                  // }}
                >
                  Send
                  {awaitingResponse && (
                    <div
                      className="spinner-border text-white ms-2 "
                      role="status"
                      style={{ height: "20px", width: "20px" }}
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
};

export default Chat;
