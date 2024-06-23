package domain

import (
	"github.com/Mateo-Sanchez14/backend/internal/url_shortener/dtos"
	"github.com/google/uuid"
)

type UrlShort struct {
	Id           uuid.UUID
	OriginalUrl  string
	ShortenedUrl string
}

func NewUrlShort(originalUrl string, shortenedUrl string) (u *UrlShort) {
	return &UrlShort{
		Id:           uuid.New(),
		OriginalUrl:  originalUrl,
		ShortenedUrl: shortenedUrl,
	}
}

type UrlShortUseCase interface {
	Create(url *dtos.UrlShortDTO) (UrlShort, error)
	GetRealUrl(shortenedUrl string) (string, error)
}

type UrlShortIRepository interface {
	Create(url *UrlShort)
	GetByShortenedUrl(shortenedUrl string) (*UrlShort, error)
}
