import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><div><span>404</span><h1>Page not found</h1><p>The page may have moved during the website upgrade.</p><Link className="button button--primary" href="/zh">返回首页 / Home</Link></div></main>;
}
