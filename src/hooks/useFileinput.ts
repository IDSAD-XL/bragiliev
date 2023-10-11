import React, { useState } from 'react'
import { useAppDispatch } from './redux'
import { openModal } from '../redux/Actions/modalActions'
import { IModalFileinputError } from '../components/elements/stateless-components/modal/ModalFileinputError'

export interface IFilesWithPreview {
  file: File
  preview: string
}

export function useFileinput(
  acceptFileExtensions?: string[],
  fileSizeLimit?: number
) {
  const [selectedFiles, setSelectedFiles] = useState<IFilesWithPreview[]>([])

  const dispatch = useAppDispatch()
  const openErrorModalHandler = (
    errorType: IModalFileinputError['errorType'],
    file: IModalFileinputError['file']
  ) => {
    openModal(dispatch, {
      type: 'file_input_error',
      content: {
        errorType,
        file,
      },
    })
  }

  const checkFile = (file: File) => {
    if (acceptFileExtensions) {
      const ext = file.name.split('.').pop()
      if (ext && !acceptFileExtensions.includes(ext)) {
        openErrorModalHandler('wrong_extension', {
          filename: file.name,
          size: file.size,
        })
        return false
      }
    }
    if (fileSizeLimit) {
      const size = (file.size / (1024 * 1024)).toFixed(2)
      if (Number(size) > fileSizeLimit) {
        openErrorModalHandler('file_is_too_big', {
          filename: file.name,
          size: file.size,
        })
        return false
      }
    }
    return true
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (files) {
      const fileList = Array.from(files)
      const previewFiles: IFilesWithPreview[] = []

      fileList.forEach((file) => {
        if (acceptFileExtensions) {
          if (!checkFile(file)) return
        }

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
        if (acceptFileExtensions) {
          if (!checkFile(file)) return
        }

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
