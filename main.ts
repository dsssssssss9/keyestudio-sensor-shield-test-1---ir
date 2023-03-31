makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    basic.showString("" + (makerbit.irButton()))
})
makerbit.onIrDatagram(function () {
	
})
makerbit.connectLcd(39)
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.Keyestudio)
makerbit.clearLcd2004()
makerbit.showStringOnLcd2004("MakerBit", makerbit.position2004(LcdPosition2004.Pos1), 20)
basic.showIcon(IconNames.Square)
basic.forever(function () {
	
})
