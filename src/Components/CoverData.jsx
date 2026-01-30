function HandleCoverInfo({ videoInfo }) {

  return (
    <div className="py-1 pr-1 h-full  w-full flex flex-col justify-center items-start ">
      <div className="flex flex-col w-full h-full items-center  px-28 ">
        <img
          className="w-fit h-fit shadow-xl rounded-md"
          src={videoInfo.videoThumbnail}
          alt={videoInfo.videoTitle || "No thumbnail image!!"}
        />
        <button
          onClick={() => {
            handleDownloadCover(videoInfo.videoThumbnail, videoInfo.videoTitle);
          }}
          className="rounded-md my-[0.22rem] bg-orange-500 focus:outline-none hover:bg-orange-600 text-white text-2xl p-2 w-full font-bold text-center "
          download={videoInfo.videoThumbnail}
        >
          Download
        </button>
      </div>
    </div>
  );
}
async function handleDownloadCover(imgCover, imgTitle) {
  let title=imgTitle.replace(/[^a-zA-Z0-0]+/g,"_")
  fetch(
    `${process.env.REACT_APP_API}/dl?url=${encodeURIComponent(
      imgCover
    )}`,
    console.log(imgCover)
  )
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch image");
      return response.blob();
    })
    .then((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = title;
      link.click();
      URL.revokeObjectURL(blobUrl);
    })
    .catch((error) => console.error("Error:", error.message));
}
export default HandleCoverInfo;
