import UploadWidget from "./UploadWidget";

function DropboxComponent({handleUpload}) {
  return (
    <UploadWidget onUpload={handleUpload}>
      {({ open }) => (
        <button onClick={open}><button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
          Upload
        </button>
        </button>
      )}
    </UploadWidget>
  )
}

export default DropboxComponent;
