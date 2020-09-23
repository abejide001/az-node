const azure = require("azure-storage")
const dotenv = require("dotenv")

dotenv.config()

const { AZURE_STORAGE_CONNECTION_STRING, AZURE_STORAGE_ACCOUNT, AZURE_STORAGE_ACCESS_KEY } = process.env
const blobService = azure.createBlobService(AZURE_STORAGE_ACCOUNT, AZURE_STORAGE_ACCESS_KEY, AZURE_STORAGE_CONNECTION_STRING)

blobService.createContainerIfNotExists('taskcontainer', {
    publicAccessLevel: 'blob'
  }, function(error, result, response) {
    if (!error) {
      console.log("container created", result, response)
    } else {
        console.log(error.message)
    }
  });