import { getBlog } from "../lib/actions"

export default function Page() {
    const blogList = getBlog();
    return (<h1>Đây là BLOG page</h1>)
}