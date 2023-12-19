input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        music.play(music.stringPlayable("- G A B A G A C5 ", 120), music.PlaybackMode.UntilDone)
    }
})
