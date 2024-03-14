-- CreateTable
CREATE TABLE "EventSchemaV1" (
    "id" SERIAL NOT NULL,
    "event_id" INTEGER NOT NULL,
    "event" TEXT NOT NULL,
    "subEvent" TEXT NOT NULL,
    "schema" JSONB NOT NULL,

    CONSTRAINT "EventSchemaV1_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventSchemaV1_event_subEvent_key" ON "EventSchemaV1"("event", "subEvent");
