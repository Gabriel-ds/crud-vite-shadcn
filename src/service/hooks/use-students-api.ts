import { api } from "../api";

export function UseApiStudents() {
    const getAllStudents = async () => {
        const { data } = await api.get("/students")
        return data
    }

    const createStudent = () => { }

    const deleteStudent = () => { }

    const updateStudent = () => { }

    return {
        getAllStudents,
        createStudent,
        deleteStudent,
        updateStudent
    }
}