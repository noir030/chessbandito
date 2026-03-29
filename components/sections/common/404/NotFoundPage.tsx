import Button from "@/components/ui/Button/Button";
import "./NotFound.css";

export default function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-gif-wrap">
          <img src="/images/404.gif" alt="404" className="not-found-gif" />
        </div>

        <div className="not-found-copy">
          <p className="sm">404</p>
          <h2>Страница не найдена</h2>
          <Button variant="dark" href="/">
            Вернуться на главную
          </Button>
        </div>
      </div>
    </section>
  );
}
