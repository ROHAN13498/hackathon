import UploadWidget from "./UploadWidget";

function DropboxComponent({callback}) {

  const handleUpload = (error, result) => {
    if (error) {
      console.error('Upload failed:', error);
    } else {
      console.log('Upload successful:', result.info.url);
      callback(result.info.url);
    }
  };
  return (
    <UploadWidget onUpload={handleUpload}>
      {({ open }) => (
        <button onClick={open}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
          Upload
        </button>
        </button>
      )}
    </UploadWidget>
  )
}

export default DropboxComponent;
