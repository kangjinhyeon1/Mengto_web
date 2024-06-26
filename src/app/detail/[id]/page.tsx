import DetailSection from '@/components/detail/detail'

export default function Detail({ params }: { params: { id: number } }) {
  return <DetailSection id={params.id} />
}
