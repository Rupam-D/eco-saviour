"use client"
import { Cloud, FileCheck, ImageDown, Loader2, UploadCloud } from 'lucide-react'
import { useContext, useState } from 'react'
import Dropzone from 'react-dropzone'
import { Progress } from './ui/progress'

import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'
import { useUploadThing } from '@/lib/generateReactHelpers'
import { wasteImgContext } from '@/context/wasteImgContext/store'
// import { trpc } from '@/app/_trpc/client'


const DropzoneModal = () => {
  const { imgUrl, setUrl ,wasteType,stWasteType} = useContext(wasteImgContext)
  // const { mutate: filePolling } = trpc.getSingleFile.useMutation({
  //   onSuccess: (data) => {
  //     router.push(`/dashboard/file/${data?.res.key}`)
  //   },
  //   retry: true,
  //   retryDelay: 500
  // })
  const { toast } = useToast()
  const [loadingValue, setLoadingValue] = useState<number>(0)
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const router = useRouter()
  const [isUploadedSuccessfully, setIsUploadedSuccessfully] = useState<boolean>()

  // uploadThing hook 
  const { startUpload } = useUploadThing("imageUploader")

  // simulated progress bar for better uiux
  const stimulatedProgress = () => {
    // reset progressbar
    setLoadingValue(0)
    // progress bar increase 5% after 500ms
    const interval = setInterval(() => {
      setLoadingValue((prev) => {
        if (prev >= 95) {
          clearInterval(interval)
          return prev
        }
        return prev + 5
      })
    }, 500)

    return interval
  }

  return (
    <Dropzone multiple={false}
      onDrop={async (acceptedFiles) => {

        setIsUploading(true)
        const progressInterVal = stimulatedProgress()

        // file uploading initiates
        const response = await startUpload(acceptedFiles)
        console.log(response, "uploadthong from cside")

        // file upload done
        clearInterval(progressInterVal)
        setLoadingValue(100)

        if (!response) {
          toast({
            title: "Something went wrong!",
            description: "We couldn't upload the Image. Please try again later.",
          })
        }
        else if (!response[0].key) {
          toast({
            title: "Something went wrong!",
            description: "We couldn't upload the Image. Please try again later.",
          })
        }

        // response && filePolling({ fileKey: response[0].key })
        response && setUrl(response[0].url)
        response && stWasteType(response[0].serverData.res)
       response && console.log(response[0].serverData.res, "from uploadthing")
        // response && router.push(`/dashboard/file/${response[0].key}`)
        // setIsUploading(false)

      }

      }>

      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <section>
          <div {...getRootProps()} className='border h-64 m-4 border-dashed border-gray-300 rounded-lg' >
            <div className='flex items-center justify-center h-full w-full'>

              <label
                htmlFor='dropzone-image'
                className='flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'>
                <div className='flex flex-col items-center justify-center px-5 py-6 '>

                  <UploadCloud className='h-6 w-6 text-green-500 mb-2' />
                  <p className='mb-2 text-sm text-zinc-700 font-semibold'>
                    Drag &apos;n&apos; drop image here, <span className='font-normal'>or</span> click to select image
                  </p>
                  <p className='text-xs text-zinc-500'> Image (upto 2MB)</p>

                </div>

                {
                  acceptedFiles && acceptedFiles[0] ?
                    (

                      <div className='max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200'>
                        <div className='px-3 py-2 h-full grid place-items-center'>
                          <ImageDown className='h-4 w-4 text-green-500' />

                        </div>
                        <div className='px-3 py-2 h-full text-sm truncate'>
                          {acceptedFiles[0].name}
                        </div>
                      </div>
                    )
                    :
                    null
                }

                {/* progress bar */}
                {
                  isUploading ?
                    <div className='w-full mt-4 max-w-xs mx-auto'>
                      <Progress
                        indicatorCol={loadingValue === 100 ? "bg-blue-500" : null}
                        value={loadingValue}
                        className='h-1 w-full bg-zinc-200'
                      />
                     
                    </div>
                    :
                    null
                }
                <input {...getInputProps()} className='bg-black' />
              </label>
            </div>

          </div>
        </section>
      )}

    </Dropzone>
  )
}

export default DropzoneModal