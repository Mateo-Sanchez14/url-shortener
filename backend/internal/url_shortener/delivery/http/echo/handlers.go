package echo

import (
	"github.com/Mateo-Sanchez14/backend/internal/url_shortener/domain"
	"github.com/labstack/echo/v4"
)

func Handlers(useCase domain.UrlShortUseCase) (e *echo.Echo) {
	app := echo.New()
	app.POST("/url", createShortUrl(useCase))
	return app
}

func createShortUrl(s domain.UrlShortUseCase) echo.HandlerFunc {
	return func(c echo.Context) error {

	}

}
