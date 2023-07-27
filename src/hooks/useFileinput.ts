import React, { useState } from 'react'

export interface IFilesWithPreview {
  file: File
  preview: string
}

export function useFileinput() {
  const [selectedFiles, setSelectedFiles] = useState<IFilesWithPreview[]>([])
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (files) {
      const fileList = Array.from(files)
      const previewFiles: IFilesWithPreview[] = []

      fileList.forEach((file) => {
        const reader = new FileReader()
        reader.onload = () => {
          previewFiles.push({ file, preview: reader.result as string })
          if (previewFiles.length === fileList.length) {
            setSelectedFiles(previewFiles)
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeFile = (file: IFilesWithPreview) => {
    const updatedFiles = selectedFiles.filter(
      (selectedFile) => selectedFile !== file
    )
    setSelectedFiles(updatedFiles)
  }

  const addFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (files) {
      const fileList = Array.from(files)
      const previewFiles: IFilesWithPreview[] = []

      fileList.forEach((file) => {
        const reader = new FileReader()
        reader.onload = () => {
          previewFiles.push({ file, preview: reader.result as string })
          if (previewFiles.length === fileList.length) {
            setSelectedFiles([...selectedFiles, ...previewFiles])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const resetFiles = () => {
    setSelectedFiles([])
  }

  return {
    selectedFiles,
    handleFileChange,
    removeFile,
    addFiles,
    resetFiles,
  }
}
