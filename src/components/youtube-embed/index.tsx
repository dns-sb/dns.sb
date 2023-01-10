interface YouTubeEmbedProps {
  id: string,
  width: string | number,
  height: string | number,
}

export default function YouTubeEmbed({ id, width, height }: YouTubeEmbedProps) {
  return (
    // eslint-disable-next-line react/iframe-missing-sandbox
    <iframe
      title={`YouTube ${id}`}
      src={`https://www.youtube-nocookie.com/embed/${id}?autohide=1&modestbranding=1&rel=0`}
      className="border-none"
      allow="encrypted-media; picture-in-picture"
      allowFullScreen
      width={width}
      height={height}
      sandbox="allow-same-origin allow-scripts allow-presentation"
    />
  );
}
